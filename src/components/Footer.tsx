import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>by Yusup Firmansyah</span>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              2024 Yusup Firmansyah. All rights reserved.
            </p>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
