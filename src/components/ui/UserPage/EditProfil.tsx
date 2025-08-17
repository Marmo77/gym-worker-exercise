import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getUserFromStorage } from "@/storage/Users";
import { useUser } from "../../../contexts/UserContext";
import { ChangeCountry } from "./ChangeCoutry";

const EditProfil = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { setCurrentUser, currentUser } = useUser();
  const [name, setName] = useState<string | undefined>(currentUser?.name);
  const [email, setEmail] = useState<string | undefined>(currentUser?.email);
  const [country, setCountry] = useState<string>(
    currentUser?.localization || "Poland"
  );
  const [validEmail, setValidEmail] = useState(true);

  // Update form when dialog opens or currentUser changes
  useEffect(() => {
    if (open && currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setCountry(currentUser.localization || "Poland");
      setValidEmail(true);
    }
  }, [open, currentUser]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); //on every letter change the state of name
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); //on every letter change the state of email
  };

  const handleClose = () => {
    onOpenChange(!open);
    // Reset form to original values
    setName(currentUser?.name);
    setEmail(currentUser?.email);
    setCountry(currentUser?.localization || "Poland");
    setValidEmail(true);
    console.log("Closed");
  };

  const ValidateEmail = () => {
    if (email?.includes("@")) {
      if (email.slice(email.search("@"), email.length).includes(".")) {
        setValidEmail(true);
        console.log("EMAIL jest: ", validEmail);
        console.log("zawiera . po");
        return true;
      } else {
        setValidEmail(false);
      }
    } else {
      setValidEmail(false);
      console.log("EMAIL jest: ", validEmail);
      console.log("Email not corrected");
      return false;
    }
  };

  const handleSave = () => {
    if (!ValidateEmail()) {
      return;
    }

    // Create updated user object
    const updatedUser = {
      ...currentUser!,
      name: name ?? "",
      email: email ?? "",
      localization: country ?? "",
    };

    // Update UserContext (this will update all components immediately)
    setCurrentUser(updatedUser);

    onOpenChange(!open);
  };

  const handleCountryChange = (selectedCountry: string) => {
    setCountry(selectedCountry);
    console.log("Country:", selectedCountry);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] max-sm:max-w-[360px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <div className="grid gap-2">
            <Label className="max-sm:mx-auto" htmlFor="name-1">
              Name
            </Label>
            <Input
              id="name-1"
              name="name"
              className="border-border rounded-xl "
              value={name ?? ""}
              onChange={handleNameChange}
            />
            <div className="grid gap-3">
              <Label className="max-sm:mx-auto" htmlFor="username-1">
                Username
              </Label>
              <Input
                id="username-1"
                name="username"
                className="border-borderrounded-xl "
                defaultValue={`@${currentUser?.username}`}
                disabled
              />
              <span className="text-muted-foreground text-[10px] px-2 font-poppins -mt-2">
                you can't change your username
              </span>
            </div>
            <div className="grid gap-3">
              <Label className="max-sm:mx-auto" htmlFor="username-1">
                Email
              </Label>
              <Input
                id="email-1"
                type="email"
                name="email"
                className="border-border rounded-xl "
                value={email ?? ""}
                onChange={handleEmailChange}
              />
            </div>
            {validEmail == false && (
              <span className="text-xs px-4 text-admin">
                Your email is not valid.
              </span>
            )}
            <div className="grid max-sm:justify-center max-sm:mt-3 max-sm:gap-4 gap-3">
              <Label className="max-sm:mx-auto" htmlFor="username-1">
                Country
              </Label>
              <ChangeCountry country={country} onChange={handleCountryChange} />
            </div>
          </div>
          <DialogFooter className="max-sm:gap-3 max-sm:mt-2">
            <Button type="submit" onClick={handleSave}>
              Save changes
            </Button>
            <DialogClose asChild>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfil;
