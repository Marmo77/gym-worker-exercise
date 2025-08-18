import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Friends } from "@/storage/Users";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Send } from "lucide-react";

interface AddFriendProps {
  open: boolean;
  onClose: () => void;
  setOpen: (open: boolean) => void;
}

const AddFriend = ({ open, onClose, setOpen }: AddFriendProps) => {
  const [sendedRequest, setSendedRequest] = useState<number[]>([]);
  const [alertInfo, setAlertInfo] = useState<string | null>(null); // friend name for alert

  const handleFriendRequest = (id: number) => {
    const friend = Friends.find((friend) => friend.id === id)?.name;
    console.log(`Friend request sent to : ${friend} !`);
    setSendedRequest((prev) => [...prev, id]);
    if (friend) setAlertInfo(friend); // trigger alert
  };

  // hide alert after 2 seconds
  useEffect(() => {
    if (alertInfo) {
      const timeout = setTimeout(() => setAlertInfo(null), 2000);
      return () => clearTimeout(timeout);
    }
  }, [alertInfo]);

  return (
    <>
      <AnimatePresence>
        {alertInfo && (
          <motion.div
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
            key={"alert"}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Alert
              className="bg-background shadow-2xs drop-shadow-lg max-w-96"
              variant={"destructive"}
            >
              <Send />
              <AlertTitle>Invitation Sent to {alertInfo}!</AlertTitle>
              <AlertDescription>
                We will alert you when they accept your invitiation!
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md w-full p-6 rounded-3xl shadow-xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Add Friends
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 mt-1">
              Find your friend (if you have) on this list and add them!
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3 max-h-96 overflow-x-hidden overflow-y-auto mt-4">
            {Friends.map((item) => {
              const isSended = sendedRequest.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center px-4 py-3 rounded-xl border border-gray-200 hover:scale-[102%] transition-all duration-300 ease-in-out bg-gray-100"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`font-semibold ${
                          item.status === "admin"
                            ? "text-red-600"
                            : item.status === "premium"
                            ? "text-yellow-500"
                            : "text-gray-800"
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        @{item.username}
                      </div>
                    </div>
                    <div
                      className={`flex gap-1 items-center text-sm text-gray-500 capitalize ${
                        item.status === "admin"
                          ? "text-red-400 before:content-['👑']"
                          : item.status === "premium"
                          ? "text-yellow-300 before:content-['💎']"
                          : "text-gray-600 before:content-['👤']"
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>
                  <button
                    className={`text-xs ${
                      isSended
                        ? "bg-green-400 hover:bg-green-600 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 click-pressed"
                    } text-white px-3 py-1 rounded-full transition-colors duration-200`}
                    disabled={isSended}
                    onClick={() => handleFriendRequest(item.id)}
                  >
                    {isSended ? "Sended" : "Send Request"}
                  </button>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddFriend;
