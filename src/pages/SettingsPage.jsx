import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, Bell, Palette, Save } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import ThemeToggle from '../components/common/ThemeToggle'
import { useTheme } from '../hooks/useTheme'

export const SettingsPage = () => {
  const { isDark } = useTheme()
  const [profileData, setProfileData] = useState({
    name: 'Sarah Admin',
    email: 'admin@aisaas.com',
    company: 'Tech Startup Inc',
    phone: '+1 (555) 123-4567',
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    productUpdates: true,
  })

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNotificationChange = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    })
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  const SettingItem = ({ icon: Icon, title, description, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-cyan-500/20 rounded-lg">
            <Icon size={20} className="text-cyan-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-400 mb-4">{description}</p>
            {children}
          </div>
        </div>
      </Card>
    </motion.div>
  )

  return (
    <DashboardLayout>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and application preferences.</p>
      </motion.div>

      <div className="max-w-2xl">
        {/* Profile Settings */}
        <SettingItem
          icon={User}
          title="Profile Settings"
          description="Update your personal information and account details"
        >
          <div className="space-y-4">
            <Input
              label="Full Name"
              name="name"
              value={profileData.name}
              onChange={handleProfileChange}
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleProfileChange}
            />
            <Input
              label="Company"
              name="company"
              value={profileData.company}
              onChange={handleProfileChange}
            />
            <Input
              label="Phone Number"
              name="phone"
              value={profileData.phone}
              onChange={handleProfileChange}
            />
          </div>
        </SettingItem>

        {/* Security Settings */}
        <SettingItem
          icon={Lock}
          title="Security Settings"
          description="Manage your password and security preferences"
        >
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded bg-slate-800 border-slate-700 accent-cyan-500"
              />
              <span className="text-gray-300 text-sm">
                Enable two-factor authentication
              </span>
            </label>
          </div>
        </SettingItem>

        {/* Notification Settings */}
        <SettingItem
          icon={Bell}
          title="Notification Settings"
          description="Control how and when you receive notifications"
        >
          <div className="space-y-3">
            {[
              { key: 'emailNotifications', label: 'Email Notifications' },
              { key: 'pushNotifications', label: 'Push Notifications' },
              { key: 'weeklyReport', label: 'Weekly Report' },
              { key: 'productUpdates', label: 'Product Updates' },
            ].map((item) => (
              <label key={item.key} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings[item.key]}
                  onChange={() => handleNotificationChange(item.key)}
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 accent-cyan-500"
                />
                <span className="text-gray-300 text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </SettingItem>

        {/* Appearance Settings */}
        <SettingItem
          icon={Palette}
          title="Appearance Settings"
          description="Customize how the application looks"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 font-semibold">Dark Mode</p>
                <p className="text-sm text-gray-500">
                  {isDark ? 'Currently enabled' : 'Currently disabled'}
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </SettingItem>

        {/* Save button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-4 mt-8"
        >
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save size={18} />
            Save Changes
          </Button>
          <Button variant="outline">
            Cancel
          </Button>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage
