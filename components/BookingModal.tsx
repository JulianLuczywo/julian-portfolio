"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "cmdk";
import {
  Calendar,
  Clock,
  Mail,
  MessageCircle,
  Video,
  Coffee,
  Briefcase,
  ExternalLink,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedOption) {
          setSelectedOption(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, selectedOption]);

  const handleSelect = (value: string) => {
    if (value === "calendar") {
      setSelectedOption("calendar");
    } else if (value === "email") {
      window.open("mailto:julian@refracted.com?subject=Let's chat!", "_blank");
      onClose();
    } else if (value === "linkedin") {
      window.open("https://linkedin.com/in/julianluczywo", "_blank");
      onClose();
    } else if (value === "twitter") {
      window.open("https://twitter.com/julianluczywo", "_blank");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-[20vh] p-4"
        onClick={() => {
          if (selectedOption) {
            setSelectedOption(null);
          } else {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedOption === "calendar" ? (
            <div className="bg-[#0d0f0d] border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-gray-400 hover:text-white text-sm mb-2 flex items-center gap-2"
                >
                  ← Back to options
                </button>
                <h2 className="text-lg font-semibold text-white">
                  Schedule a Meeting
                </h2>
                <p className="text-gray-400 text-sm">
                  Choose a time that works for you
                </p>
              </div>
              <div className="p-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg min-h-[500px] flex items-center justify-center">
                  <iframe
                    src="https://calendar.notion.so/meet/julianluczywo/coding"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Schedule a meeting"
                  />
                </div>
              </div>
            </div>
          ) : (
            <Command className="bg-[#0d0f0d] border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
              <Command.Input
                placeholder="How would you like to connect?"
                className="w-full px-4 py-3 bg-transparent border-none outline-none text-white placeholder-gray-400 text-lg"
              />
              <Command.List className="max-h-96 overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-gray-400">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Quick Actions"
                  className="text-gray-500 text-xs font-medium px-2 py-2 space-y-2"
                >
                  <Command.Item
                    value="calendar"
                    onSelect={handleSelect}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-[#222725]/50 data-[selected]:bg-[#222725]/50 transition-colors"
                  >
                    <Calendar className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        Schedule a Meeting
                      </div>
                      <div className="text-gray-400 text-sm">
                        Book time on my calendar
                      </div>
                    </div>
                    <kbd className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                      ↵
                    </kbd>
                  </Command.Item>

                  <Command.Item
                    value="email"
                    onSelect={handleSelect}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-[#222725]/50 data-[selected]:bg-[#222725]/50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Send Email</div>
                      <div className="text-gray-400 text-sm">
                        julian@refracted.com
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Social"
                  className="text-gray-500 text-xs font-medium px-2 py-2 space-y-2"
                >
                  <Command.Item
                    value="linkedin"
                    onSelect={handleSelect}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-[#222725]/50 data-[selected]:bg-[#222725]/50 transition-colors"
                  >
                    <Briefcase className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-gray-400 text-sm">
                        Connect professionally
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </Command.Item>

                  <Command.Item
                    value="twitter"
                    onSelect={handleSelect}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-[#222725]/50 data-[selected]:bg-[#222725]/50 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Twitter</div>
                      <div className="text-gray-400 text-sm">
                        @julianluczywo
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </Command.Item>
                </Command.Group>

                {/* <Command.Group
                  heading="Meeting Types"
                  className="text-gray-500 text-xs font-medium px-2 py-2"
                >
                  <Command.Item
                    value="coffee"
                    onSelect={() => setSelectedOption("calendar")}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-gray-800/50 data-[selected]:bg-gray-800 transition-colors"
                  >
                    <Coffee className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Coffee Chat</div>
                      <div className="text-gray-400 text-sm">
                        Casual 30-minute conversation
                      </div>
                    </div>
                  </Command.Item>

                  <Command.Item
                    value="consultation"
                    onSelect={() => setSelectedOption("calendar")}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-gray-800/50 data-[selected]:bg-gray-800 transition-colors"
                  >
                    <Video className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        Project Consultation
                      </div>
                      <div className="text-gray-400 text-sm">
                        Discuss your project needs
                      </div>
                    </div>
                  </Command.Item>

                  <Command.Item
                    value="quick-call"
                    onSelect={() => setSelectedOption("calendar")}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-gray-800/50 data-[selected]:bg-gray-800 transition-colors"
                  >
                    <Clock className="w-5 h-5 text-[#899878]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Quick Call</div>
                      <div className="text-gray-400 text-sm">
                        15-minute focused discussion
                      </div>
                    </div>
                  </Command.Item>
                </Command.Group> */}
              </Command.List>
            </Command>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
