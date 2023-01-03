import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA = [
    {
        id: '001',
        title: '1st Meetup',
        image: 'https://townsquare.media/site/442/files/2021/10/attachment-Nightmare-on-Elm-Street.jpg?w=980&q=75',
        address: '666 Elm St',
        description: 'you just had to be there'
    },
    {
        id: '003',
        title: '2nd Meetup',
        image: 'https://static.wikia.nocookie.net/ideas/images/c/c9/Street.jpg/revision/latest?cb=20140410234138',
        address: '12345 Sesame St',
        description: 'don\'t miss it!'
    }
];

function AllMeetUpsPage() {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={DUMMY_DATA}/>
        </section>
    );
}

export default AllMeetUpsPage;
