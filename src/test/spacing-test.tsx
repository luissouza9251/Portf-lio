/**
 * Simple test component to verify spacing system functionality
 * This file can be removed after verification
 */

import React from 'react'
import { spacing } from '../config/spacing'
import { getSpacingClass, getResponsiveGap } from '../utils/spacing'

const SpacingTest: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Spacing System Test</h2>
      
      {/* Test spacing tokens */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Spacing Tokens:</h3>
        <div className="space-y-2">
          {Object.entries(spacing).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <span className="w-20 text-sm">{key}:</span>
              <span className="text-purple-400">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Test section spacing variants */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Section Spacing Variants:</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">normal:</span>
            <span className="text-blue-400">py-16 md:py-20</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">large:</span>
            <span className="text-blue-400">py-20 md:py-24</span>
          </div>
        </div>
      </div>

      {/* Test card spacing variants */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Card Spacing Variants:</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">normal:</span>
            <span className="text-green-400">p-6</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">large:</span>
            <span className="text-green-400">p-8</span>
          </div>
        </div>
      </div>

      {/* Test grid gap variants */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Grid Gap Variants:</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">small:</span>
            <span className="text-yellow-400">gap-4</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">medium:</span>
            <span className="text-yellow-400">gap-6</span>
          </div>
        </div>
      </div>

      {/* Test utility functions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Utility Functions:</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm">getSpacingClass:</span>
            <span className="text-purple-400">{getSpacingClass('padding', 'large')}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm">getResponsiveGap:</span>
            <span className="text-purple-400">{getResponsiveGap('medium', 'large', 'xl')}</span>
          </div>
        </div>
      </div>

      {/* Visual spacing test */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Visual Spacing Test:</h3>
        
        {/* Test different spacing sizes */}
        <div className="space-y-4">
          <div className="bg-purple-900/20 p-3 rounded">
            <h4 className="text-sm font-medium mb-2">Micro Spacing (4px):</h4>
            <div className="flex gap-0.5">
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
            </div>
          </div>

          <div className="bg-blue-900/20 p-3 rounded">
            <h4 className="text-sm font-medium mb-2">Medium Spacing (16px):</h4>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
            </div>
          </div>

          <div className="bg-green-900/20 p-3 rounded">
            <h4 className="text-sm font-medium mb-2">XL Spacing (32px):</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <div className="w-8 h-8 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Test responsive grid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Responsive Grid Test:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-medium">Card 1</h4>
            <p className="text-sm text-gray-400 mt-2">This grid uses responsive gaps</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-medium">Card 2</h4>
            <p className="text-sm text-gray-400 mt-2">24px gap on mobile, 32px on desktop</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpacingTest