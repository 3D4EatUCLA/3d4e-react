/*
    Each object contains the following:
        id: Used for React components, as long as there are no duplicates, anything goes
        title: Title of blurb
        text: The actual blurb
        schedule: (optional) when and where the event is
        redirect: (optional) Landing lcoation of button
*/

const homeData = [
    {
        id: "general",
        title: "3D Printing at UCLA",
        text: `3D Printing is a combination of art, engineering, and 
        problem-solving. At 3D4E, we strive to inspire people through the 
        power of computer-aided design, and leave our own mark by building 
        practical solutions to real-world problems through 3D-printed products.`,
    },
    {
        id: "projects",
        title: "Projects",
        text: `Our club's main focus is on group projects, in which we design, 
        manufacture, and test using CAD software and 3D printing. These projects 
        range from recreational, like hydroponics, to technical, like our flight 
        team. In addition to our group efforts, 3D4E also supports members with 
        the resources and expertise they might need to pursue their own individual 
        ideas, like our RC car team.`,
        schedule: "Project Hours: 7PM - 8PM Thursdays at Boelter Library SEL Learning Commons",
        redirect: "/projects"
    },
    {
        id: "workshops",
        title: "Workshops",
        text: `Regardless of your background, major, or design experience, we 
        are committed to teaching all our general members how to 3D print from 
        the ground up. During the Fall Quarter, we host weekly workshops to 
        train everyone how to use CAD tools like Fusion360, and translate your 
        design into manufacturable prints.`,
        schedule: "Workshop Hours: 6PM - 7PM Thursdays at Boelter Library SEL Learning Commons",
        redirect: "/workshops"
    },
    {
        id: "gallery",
        title: "Gallery",
        text: `From showcases to tech fairs, retreats to social outreach events,
        follow our adventures by browsing our media gallery.`,
        redirect: "/events"
    },
    {
        id: "officers",
        title: "Officers",
        text: `Meet the board members!`,
        redirect: "/officers"
    }
]

export default homeData