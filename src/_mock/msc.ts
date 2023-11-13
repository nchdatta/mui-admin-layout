export const roles = [
    { id: 1, name: "Administrator", created_at: "10/12/23 10:30:22 AM", status: "active" },
    { id: 2, name: "Operator", created_at: "10/12/23 10:30:22 AM", status: "active" },
    { id: 3, name: "Teacher", created_at: "10/12/23 10:30:22 AM", status: "active" },
    { id: 4, name: 'Student', created_at: "10/12/23 10:30:22 AM", status: false },
    { id: 5, name: 'Controller', created_at: "10/12/23 10:30:22 AM", status: "active" },
    { id: 6, name: 'Moderator', created_at: "10/12/23 10:30:22 AM", status: "active" },
    { id: 7, name: 'Executive', created_at: "10/12/23 10:30:22 AM", status: "active" }
];
export const st_promotion = [
    { id: 1, prev_session: "2020-2021", curr_session: "2021-2022", from_class: "Class 1", to_class: "Class 2", section: "A", students_count: 20, promotion_date: "10/01/2023" },
    { id: 2, prev_session: "2020-2021", curr_session: "2021-2022", from_class: "Class 1", to_class: "Class 2", section: "A", students_count: 20, promotion_date: "10/01/2023" },
    { id: 3, prev_session: "2020-2021", curr_session: "2021-2022", from_class: "Class 1", to_class: "Class 2", section: "A", students_count: 20, promotion_date: "10/01/2023" },
    { id: 4, prev_session: "2020-2021", curr_session: "2021-2022", from_class: "Class 1", to_class: "Class 2", section: "A", students_count: 20, promotion_date: "10/01/2023" },
    { id: 5, prev_session: "2020-2021", curr_session: "2021-2022", from_class: "Class 1", to_class: "Class 2", section: "A", students_count: 20, promotion_date: "10/01/2023" },
    { id: 6, prev_session: "2020-2021", curr_session: "2021-2022", from_class: "Class 1", to_class: "Class 2", section: "A", students_count: 20, promotion_date: "10/01/2023" }
];
export const subjects = [
    { id: 1, class: "Class 1", name: "English Today", code: "ENG001", type: "Theory", added_date: "12/03/23 10:12:00 PM", status: "active" },
    { id: 2, class: "Class 1", name: "Bangla", code: "BAN002", type: "Theory", added_date: "12/03/23 10:12:00 PM", status: "active" },
    { id: 3, class: "Class 2", name: "Mathmatics", code: "MAT005", type: "Theory", added_date: "12/03/23 10:12:00 PM", status: "active" },
    { id: 4, class: "Class 3", name: "General Science", code: "SCN009", type: "Theory", added_date: "12/03/23 10:12:00 PM", status: "active" },
    { id: 5, class: "Class 4", name: "Religion", code: "REL007", type: "Theory", added_date: "12/03/23 10:12:00 PM", status: "active" },
    { id: 6, class: "Class 5", name: "Social Sciense", code: "SOC010", type: "Theory", added_date: "12/03/23 10:12:00 PM", status: "active" }
];


export const moduleMenus = [
    { name: 'Students', subMenu: 'Manage Students', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Students', subMenu: 'Add New Student', canRead: false, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Students', subMenu: 'Admission Form', canRead: true, canWrite: true, canUpdate: true, canDelete: false },
    { name: 'Students', subMenu: 'Student Promotion', canRead: true, canWrite: false, canUpdate: true, canDelete: false },
    { name: 'Students', subMenu: 'Manage ID Cards', canRead: false, canWrite: false, canUpdate: true, canDelete: true },
    { name: 'Teachers', subMenu: 'Manage Teachers', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Teachers', subMenu: 'Add New Teacher', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Teachers', subMenu: 'Manage ID Cards', canRead: true, canWrite: false, canUpdate: true, canDelete: true },
    { name: 'Parents', subMenu: 'Manage Parents', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Parents', subMenu: 'Add Parent', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Sessions', subMenu: 'Manage Sessions', canRead: false, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Sessions', subMenu: 'Add New Session', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Classes', subMenu: 'Manage Classes', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Classes', subMenu: 'Add New Class', canRead: false, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Classes', subMenu: 'Class Routine', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Attendance', subMenu: 'Manage Attendance', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Attendance', subMenu: 'Biometric Attendance', canRead: true, canWrite: false, canUpdate: true, canDelete: false },
    { name: 'Attendance', subMenu: 'Attendence Report', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Subjects', subMenu: 'Manage Subjects', canRead: false, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Subjects', subMenu: 'Add New Subject', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Class Exams', subMenu: 'Manage Class Exams', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Class Exams', subMenu: 'Create New Exam', canRead: false, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Class Exams', subMenu: 'Exam Routine', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Class Exams', subMenu: 'Exam Grades Config', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Final Exams', subMenu: 'Manage Final Exams', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Final Exams', subMenu: 'Create New Exam', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Final Exams', subMenu: 'Exam Routine', canRead: false, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Final Exams', subMenu: 'Exam Grades Config', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Results', subMenu: 'Manage Class Results', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Results', subMenu: 'Manage Final Results', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Results', subMenu: 'Final Result Card', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Library', subMenu: 'Manage Books', canRead: false, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Library', subMenu: 'Add New Book', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Requests', subMenu: 'Manage Requests', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Requests', subMenu: 'New Request', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Holidays', subMenu: 'Manage Holidays', canRead: false, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Holidays', subMenu: 'Add Holiday', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Holidays', subMenu: 'Holiday Calendar', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Documents', subMenu: 'Manage Documents', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Notices', subMenu: 'Manage Notices', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Notices', subMenu: 'Create New Notice', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Accounts', subMenu: 'Manage Fees Collection', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Accounts', subMenu: 'Manage Expenses', canRead: false, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Accounts', subMenu: 'Add New Expense', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Accounts', subMenu: 'Manage Waivers', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Settings', subMenu: 'Manage Staffs', canRead: false, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Settings', subMenu: 'Add New Staff', canRead: true, canWrite: true, canUpdate: false, canDelete: false },
    { name: 'Settings', subMenu: 'Manage Roles', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Settings', subMenu: 'Menu Configuration', canRead: true, canWrite: false, canUpdate: false, canDelete: false },
    { name: 'Settings', subMenu: 'Permission Management', canRead: false, canWrite: false, canUpdate: false, canDelete: false }
];
