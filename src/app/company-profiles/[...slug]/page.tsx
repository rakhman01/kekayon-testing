import Image from "next/image";
import WhoWeAre from "../who-we-are";
import Milestone from "../milestone";
import SeeOutSmiles from "../See-our-smiles";
import JoinOurTeam from "../JoinOutTeam";
import { BetterTravel } from "../Better-travel";
import Page404 from "@/app/not-found";

export default function Page({
    params,
}: {
    params: { slug: string };
}) {

    let slug = params.slug

    const renderComponent = () => {
        switch (slug[0]) {
          case "who-we-are":
            return <WhoWeAre />;
          case "milestone":
            return <Milestone />;
          case "see-our-smiles":
            return <SeeOutSmiles />;
          case "join-our-team":
            return <JoinOurTeam />;
          case "better-travel":
            return <BetterTravel />;
          default:
            return <Page404 />;
        }
      };
    
      return <div className="w-auto relative overflow-hidden">{renderComponent()}</div>
    
    
}
