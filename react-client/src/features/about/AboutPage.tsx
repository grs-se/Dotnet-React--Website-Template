import PageContainer from "../../app/layout/PageContainer";
import Profile from "./Profile";

export default function AboutPage() {
	return (
		<>
		<PageContainer pageHeader={"About Henry"} content={<Profile/>} width={""}/>
		</>
	);
}