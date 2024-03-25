import { ArrowRightIcon } from "lucide-react";
import TechnologyItem from "./TechnologyItem";
import { Button } from "./button";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

interface TechnologiesFieldProps {
  id: string;
}

const TechnologiesField = ({ id }: TechnologiesFieldProps) => {
  const { t } = useTranslation()

  return (
      <div id={id} >
        <div className="flex rounded-xl bg-foreground backdrop-blur-sm px-2 py-4 flex-wrap gap-4 max-w-[25rem] shadow-greenNeon">
          <div className="flex w-full justify-between">
            <TechnologyItem
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              techName="React"
            ></TechnologyItem>
            <TechnologyItem
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              techName="Next.JS"
            />
            <TechnologyItem
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              techName="TypeScript"
            />
            <TechnologyItem
              imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              techName="Tailwind"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <Button variant="secondary" className="text-foreground object-fit">
              <Link href="/projects">
                <div className="flex gap-2 items-center">
                  <p>{t("seeProjects")}</p>
                  <ArrowRightIcon />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default TechnologiesField;
