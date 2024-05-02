import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  variant?: string;
  children?: React.ReactNode;
}

export function BackButton({ variant, children }: BackButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button onClick={handleGoBack} className={variant}>
      {children || <ArrowLeft className="text-background" />}
    </Button>
  );
}
