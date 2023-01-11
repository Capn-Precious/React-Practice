import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
    {
        id: '001',
        title: '1st Meetup',
        image: 'https://townsquare.media/site/442/files/2021/10/attachment-Nightmare-on-Elm-Street.jpg?w=980&q=75',
        address: '666 Elm St',
        description: 'you just had to be there'
    },
    {
        id: '002',
        title: '2nd Meetup',
        image: 'https://townsquare.media/site/442/files/2021/10/attachment-Nightmare-on-Elm-Street.jpg?w=980&q=75',
        address: '666 Elm St',
        description: ''
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
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('insert-firebase-link'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data)
            {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(data);
        });
    }, [])

    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={DUMMY_DATA}/>
        </section>
    );
}

export default AllMeetUpsPage;
