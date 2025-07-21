import { Calendar, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import Link from "next/link";
import Image from "next/image";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { CollapsibleContent } from "./ui/collapsible";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const AppSidebar = () => {
    return (
     <Sidebar collapsible="icon">
        <SidebarHeader className="py-4">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                       <Link href="/">
                        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                        <span className="ml-2">Campaign Management</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarSeparator/>
            
            <SidebarContent>
                {/* first group */}
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarContent>
                        <SidebarMenu>
                            {items.map(item=>(
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                        <item.icon/>
                                        <span >{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {item.title === "Inbox" && (
                                        <SidebarMenuBadge>
                                            24
                                        </SidebarMenuBadge>
                                    )}
                                         
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>

                {/* second group */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Projects
                    </SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus/> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <Projector/>
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                             <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <Plus/>
                                        Add Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Colabsable */}
                <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                        Collapsible group
                        <ChevronUp className="ml-auto transition-transform group-[.open/collapsible]:rotate-180"/>
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <Projector/>
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                             <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <Plus/>
                                        Add Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            
                        </SidebarMenu>
                    </SidebarGroupContent>
                    </CollapsibleContent>

                </SidebarGroup>
                </Collapsible>

                {/* Nested */}
                 <SidebarGroup>
                    <SidebarGroupLabel>
                       Nested items
                    </SidebarGroupLabel>
                    
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="#">
                                        <Projector/>
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuButton asChild>
                                                <Link href="#"> 
                                                  <Plus/>
                                                  Add project
                                                </Link>

                                            </SidebarMenuButton>
                                        </SidebarMenuSubItem>

                                        <SidebarMenuSubItem>
                                            <SidebarMenuButton asChild>
                                                <Link href="#"> 
                                                  <Plus/>
                                                  Add Category
                                                </Link>

                                            </SidebarMenuButton>
                                        </SidebarMenuSubItem>

                                    </SidebarMenuSub>
                            </SidebarMenuItem> 
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                
            </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <User2/> John Doe <ChevronUp className="ml-auto"/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Account</DropdownMenuItem>
                            <DropdownMenuItem>Settins</DropdownMenuItem>
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
     </Sidebar>
    )
}

export default AppSidebar;