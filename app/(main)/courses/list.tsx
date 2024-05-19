"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { courses, userProgress } from "@/db/schema";
import { upsertUserProgess } from "@/actions/user-progress";

import { Card } from "./card";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({
  courses,
  activeCourseId,
}: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;
    if (activeCourseId === id) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgess(id).catch(() =>
        toast.error("Something went wrong")
      );
    });
  };
  return (
    <div className="pt-6 gap-4 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
