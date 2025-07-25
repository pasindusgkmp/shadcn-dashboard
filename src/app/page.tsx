import AppAreaChart from "@/components/AppAreaChart";
import AppbarChart from "@/components/AppbarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";


const Homepage =() =>{
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppbarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions" /></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"/></div>
    </div>
  );
};

export default Homepage;
