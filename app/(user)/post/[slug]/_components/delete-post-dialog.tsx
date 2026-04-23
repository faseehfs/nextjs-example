"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deletePost } from "./actions";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export function DeletePostDialog({ postId }: { postId: string }) {
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setIsPending(true);
    try {
      await deletePost({ postId });
      redirect("/post");
    } finally {
      router.refresh();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-min">
          <Trash /> Delete Post
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="delete-post">
        <DialogHeader>
          <DialogTitle>Do you want to delete this post?</DialogTitle>
          <DialogDescription>
            This will permanently delete your post and cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? <Spinner className="size-4" /> : "Delete Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
