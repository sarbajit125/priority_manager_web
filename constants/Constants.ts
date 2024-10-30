import SummaryTableModel from "@/models/dataModel"

export const summaryHeaders: string[] = ['Name', 'Priority','Due Date']
export const progressMockData: SummaryTableModel[] = [
    {
        id: "1",
        title: "Project Alpha",
        priority: "High",
        deliveryDate: new Date("2024-11-15"),
    },
    {
        id: "2",
        title: "Project Beta",
        priority: "Medium",
        deliveryDate: new Date("2024-12-01"),
    },
    {
        id: "3",
        title: "Project Gamma",
        priority: "Low",
        deliveryDate: new Date("2025-01-10"),
    },
    {
        id: "4",
        title: "Project Delta",
        priority: "High",
        deliveryDate: new Date("2024-11-30"),
    },
    {
        id: "5",
        title: "Project Epsilon",
        priority: "Medium",
        deliveryDate: new Date("2024-12-15"),
    },
];
export const toDoMockData: SummaryTableModel[] = [
    {
        id: "6",
        title: "Project Zeta",
        priority: "High",
        deliveryDate: new Date("2024-11-20"),
    },
    {
        id: "7",
        title: "Project Eta",
        priority: "Low",
        deliveryDate: new Date("2025-02-05"),
    },
    {
        id: "8",
        title: "Project Theta",
        priority: "Medium",
        deliveryDate: new Date("2024-12-10"),
    },
];

export const upcomingMockData: SummaryTableModel[] = [
    {
        id: "9",
        title: "Project Iota",
        priority: "Medium",
        deliveryDate: new Date("2025-01-25"),
    },
    {
        id: "10",
        title: "Project Kappa",
        priority: "High",
        deliveryDate: new Date("2024-11-05"),
    },
    {
        id: "11",
        title: "Project Lambda",
        priority: "Low",
        deliveryDate: new Date("2025-03-15"),
    },
];
