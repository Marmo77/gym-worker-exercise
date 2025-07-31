import { useState } from "react";
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

import DummyUser from "@/storage/Users";
import { ChangeCountry } from "./ChangeCoutry";

const EditProfil = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [name, setName] = useState(DummyUser.name);
  const [email, setEmail] = useState<string>(DummyUser.email);
  const [country, setCountry] = useState<string>(DummyUser.localization);
  const [validEmail, setValidEmail] = useState(true);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); //on every letter change the state of name
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); //on every letter change the state of email
  };

  const handleClose = () => {
    onOpenChange(!open);
    setName(DummyUser.name); // Cancel the handleName Changes
    setEmail(DummyUser.email); // Cancel the handelEmail Changes
    console.log("Closed");
  };

  const ValidateEmail = () => {
    if (email.includes("@")) {
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
    } else {
      console.log("Name changed to: " + name);
      console.log("Email changed to: " + email);
      DummyUser.name = name; // Update the name
      DummyUser.email = email; // Update the email
      DummyUser.localization = country;
      onOpenChange(!open);
    }
  };
  const handleCountryChange = (selectedCountry: string) => {
    setCountry(selectedCountry);
    console.log("Country:", selectedCountry);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <div className="grid gap-2">
            <Label htmlFor="username-1">Name</Label>
            <Input
              id="name-1"
              name="name"
              className="border-border rounded-xl "
              value={name}
              onChange={handleNameChange}
            />
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input
                id="username-1"
                name="username"
                className="border-borderrounded-xl "
                defaultValue={`@${DummyUser.username}`}
                disabled
              />
              <span className="text-muted-foreground text-[10px] px-2 font-poppins -mt-2">
                you can't change your username
              </span>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Email</Label>
              <Input
                id="email-1"
                type="email"
                name="email"
                className="border-border rounded-xl "
                defaultValue={`${DummyUser.email}`}
                onChange={handleEmailChange}
              />
            </div>
            {validEmail == false && (
              <span className="text-xs px-4 text-admin">
                Your email is not valid.
              </span>
            )}
            <div className="grid gap-3">
              <Label htmlFor="username-1">Country</Label>
              <ChangeCountry country={country} onChange={handleCountryChange} />
            </div>
          </div>
          <DialogFooter>
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
