import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { authService } from '../services';
import { 
  Menu, X, Home, Package, Users, Calendar, BarChart3, 
  Settings, Bell, LogOut, User, Search 
} from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  // Navigation items based on user role
  const getNavigationItems = () => {
    const baseItems = [
      { name: 'Dashboard', href: `/${user?.role}/dashboard`, icon: Home }
    ];

    switch (user?.role) {
      case 'buyer':
        return [
          ...baseItems,
          { name: 'Browse Products', href: '/products', icon: Package },
          { name: 'Smart Discovery', href: '/discovery', icon: Search },
          { name: 'My Meetings', href: '/meetings', icon: Calendar },
          { name: 'Analytics', href: '/analytics', icon: BarChart3 }
        ];
      case 'seller':
        return [
          ...baseItems,
          { name: 'My Products', href: '/seller/products', icon: Package },
          { name: 'Compliance', href: '/compliance', icon: Users },
          { name: 'Meetings', href: '/meetings', icon: Calendar },
          { name: 'Analytics', href: '/analytics', icon: BarChart3 }
        ];
      default:
        return baseItems;
    }
  };

  const navigation = getNavigationItems();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75" 
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-white">
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <span className="text-xl font-bold">
                <span className="text-orange-500">Food</span>
                <span className="text-teal-600">Xchange</span>
              </span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-1 bg-white border-r">
          <div className="flex items-center h-16 px-4 border-b">
            <Link to="/" className="text-xl font-bold">
              <span className="text-orange-500">Food</span>
              <span className="text-teal-600">Xchange</span>
            </Link>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 ml-auto">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center text-sm rounded-full focus:outline-none"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                    {user?.firstName?.[0]?.toUpperCase() || 'U'}
                  </div>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-medium text-gray-900">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                    <Link
                      to={`/${user?.role}/settings`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings className="inline w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="inline w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
