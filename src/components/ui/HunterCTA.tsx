import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Shield, TrendingUp, Users } from 'lucide-react';
import Button from './Button';

interface HunterCTAProps {
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
}

const HunterCTA = ({ variant = 'default', className = '' }: HunterCTAProps) => {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-gradient-to-r from-safari-600 to-maasai-600 text-white p-6 rounded-2xl ${className}`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Earn as a House Hunter</h3>
            <p className="text-safari-100">KSh 2,000 - 15,000 per successful match</p>
          </div>
          <Link href="/hunter-signup">
            <Button variant="glass" size="lg" className="whitespace-nowrap">
              Join Now
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-safari-600 text-white p-8 rounded-3xl ${className}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        
        <div className="relative text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            <span>Verified Hunter Program</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Turn Your Local Knowledge Into Income
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Help your neighbors find perfect homes while earning substantial commissions. 
            Join Kenya's most trusted house hunting network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/hunter-signup">
              <Button variant="glass" size="xl" modern className="px-8">
                Start Your Application
              </Button>
            </Link>
            <Link href="/for-hunters">
              <Button variant="outline" size="xl" className="px-8 border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">KSh 15K</div>
              <div className="text-sm text-white/80">Max per match</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/80">Active hunters</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-sm text-white/80">Hunter rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-primary-50 to-safari-50 p-8 rounded-3xl border border-primary-200/50 ${className}`}
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-safari-100 to-secondary-100 rounded-full text-safari-800 text-sm font-medium border border-safari-200/50 mb-4">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span className="font-swahili mr-2">Pata pesa</span>
          <span className="text-neutral-600">• Earn money</span>
        </div>
        
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Become a <span className="gradient-text-safari">Verified</span> House Hunter
        </h2>
        
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
          Use your local knowledge to help people find homes and earn KSh 2,000 - 15,000 per successful match. 
          Join our trusted network of house scouts across Kenya.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">High Earnings</h3>
          <p className="text-sm text-neutral-600">Earn up to KSh 15,000 per successful house match</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-safari-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">Verified Status</h3>
          <p className="text-sm text-neutral-600">Get verified badge and priority access to leads</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
          <div className="w-12 h-12 bg-gradient-to-r from-maasai-500 to-kenyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">Community</h3>
          <p className="text-sm text-neutral-600">Join 500+ active hunters across Kenya</p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/hunter-signup">
          <Button variant="gradient" size="xl" modern glow className="px-12 mr-4">
            Start Your Application
          </Button>
        </Link>
        <Link href="/for-hunters">
          <Button variant="outline" size="xl" className="px-8">
            Learn More
          </Button>
        </Link>
      </div>

      <div className="mt-6 text-center text-sm text-neutral-500">
        <p>
          <span className="font-swahili italic">"Haba na haba, hujaza kibaba"</span> - Little by little fills the measure
        </p>
        <p className="mt-1">
          Applications reviewed within 2-3 business days • No upfront fees
        </p>
      </div>
    </motion.div>
  );
};

export default HunterCTA;
