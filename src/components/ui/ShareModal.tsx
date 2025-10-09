import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Share2,
  Copy,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
  Link2,
  Check,
} from "lucide-react";
import Button from "./Button";
import Card from "./Card";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

const ShareModal = ({ isOpen, onClose, property }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);

  // Generate the property URL
  const propertyUrl = `${window.location.origin}/property/${property.id}`;

  // Create share text
  const shareText = `Check out this amazing property: ${property.title} in ${
    property.location
  } for KSh ${property.price.toLocaleString()}/month on Spot A Crib!`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = propertyUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      propertyUrl
    )}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(propertyUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${propertyUrl}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Property: ${property.title}`);
    const body = encodeURIComponent(
      `${shareText}\n\nView property: ${propertyUrl}`
    );
    const emailUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = emailUrl;
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      onClick: shareToWhatsApp,
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      onClick: shareToFacebook,
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      onClick: shareToTwitter,
      color: "bg-blue-400 hover:bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "Email",
      icon: Mail,
      onClick: shareViaEmail,
      color: "bg-neutral-600 hover:bg-neutral-700",
      textColor: "text-white",
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md"
        >
          <Card className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-safari-600" />
                <h2 className="text-lg font-semibold text-neutral-900">
                  Share Property
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Property Preview */}
              <div className="mb-6">
                <div className="flex items-start space-x-3 p-3 bg-safari-50 rounded-lg">
                  <img
                    src={property.image || "/placeholder-house.jpg"}
                    alt={property.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 truncate">
                      {property.title}
                    </h3>
                    <p className="text-sm text-neutral-600 truncate">
                      {property.location}
                    </p>
                    <p className="text-sm font-medium text-safari-600">
                      KSh {property.price.toLocaleString()}/month
                    </p>
                  </div>
                </div>
              </div>

              {/* Copy Link */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Property Link
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 flex items-center bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2">
                    <Link2 className="w-4 h-4 text-neutral-400 mr-2" />
                    <input
                      type="text"
                      value={propertyUrl}
                      readOnly
                      className="flex-1 bg-transparent text-sm text-neutral-600 focus:outline-none"
                    />
                  </div>
                  <Button
                    onClick={copyToClipboard}
                    variant={copied ? "primary" : "outline"}
                    size="sm"
                    className="min-w-[80px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Share Options */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Share on Social Media
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {shareOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={option.onClick}
                      className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${option.color} ${option.textColor}`}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Tip:</strong> Sharing properties helps us reach
                  more people looking for homes in Kenya!
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShareModal;
