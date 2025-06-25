import { SignedIn } from "@clerk/nextjs";

import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { MainSection } from "./main-section";
import { PersonalSection } from "./personal-section";
import { SubscriptionSection } from "./subscriptions-section";

export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />

        <Separator />

        <PersonalSection />

        <SignedIn>
          <>
            <Separator />

            <SubscriptionSection />
          </>
        </SignedIn>
      </SidebarContent>
    </Sidebar>
  );
};
