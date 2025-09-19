"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";


export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        {/* <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" /> */}
        <p className="text-sm lg:w-[350px]">My house is 400m long and 500m wide, how much should it cost ?</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-sm lg:w-[350px]">It depends on several features like its position, the number of rooms, the median age of the house. etc...
        Why don't you take the test by filling the form on the Service Section ?
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
     
    </motion.div>
  );
};

type Stat = { label: string; value: number };

const stats: Stat[] = [
  { label: "Fiabilité", value: 89 },
  { label: "Précision des estimations", value: 87 },
  { label: "Satisfaction utilisateur", value: 91 },
  { label: "Cohérence marché", value: 85 },
  { label: "Vitesse de traitement", value: 98 },
  // { label: "Amélioration continue", value: 73 },
];

function colorClass(v: number) {
  if (v >= 90) return "bg-emerald-500";
  if (v >= 80) return "bg-lime-500";
  if (v >= 60) return "bg-amber-500";
  return "bg-rose-500";
}

const SkeletonTwo = () => {
  return (
    <div className="flex flex-col w-full h-full space-y-2 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl mb-[-12px]">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col space-y-1 text-sm">
          {/* titre + valeur */}
          <div className="flex justify-between text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <span>{stat.label}</span>
            <span>{stat.value}%</span>
          </div>

          {/* track */}
          <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            {/* bar animée */}
            <motion.div
              className={`h-full rounded-full ${colorClass(stat.value)}`}
              initial={{ width: 0 }}
              animate={{ width: `${stat.value}%` }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 1 }} // pas d'ease string -> pas d'erreur TS
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={stat.value}
              role="progressbar"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <img src="/Images/HouseSlider2.webp" alt="" />
      
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="/images/form1.webp"
          alt="avatar"
          height="450px"
          width="550px"
          className=""
        />
        
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="/images/form2.webp"
          alt="avatar"
          height="450px"
          width="550px"
          className=""
        />
        
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="/images/form3.webp"
          alt="avatar"
          height="450px"
          width="550px"
          className=""
        />
        
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          Combien cela va t-il me coûter d'utiliser vos services et comment procéder aux paiements ..;
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Nos services sont totalement gratuit 🙂.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Estimation Immobilière Instantanée",
    description: (
      <span className="text-sm italic">
        Obtenez en quelques secondes une estimation précise de votre bien..
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Analyse Basée sur des Données Réelles",
    description: (
      <span className="text-sm">
        Des prédictions construites sur le California Housing Dataset.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 ",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Interface Simple et Intuitive",
    description: (
      <span className="text-sm">
        Saisissez vos informations, obtenez un prix.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Visualisation Interactive",
    description: (
      <span className="text-sm">
        Des graphiques clairs pour mieux comprendre.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Gratuit et Sans Engagement",
    description: (
      <span className="text-sm">
        Testez HouSetimation librement.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
