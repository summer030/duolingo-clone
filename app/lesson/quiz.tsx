"use client";

import { useState } from "react";

import { challengeOptions, challenges } from "@/db/schema";

import { Header } from "./header";

type Props = {
  initialLessonId: number;
  initialHearts: number;
  initialPercentage: number;
  initialLessonChallenges: (typeof challenges.$inferInsert & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferInsert)[];
  })[];
  userSubscription: any; //TODO: Replace with subscription DB type
};

export const Quiz = ({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(
    initialPercentage
  );
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
