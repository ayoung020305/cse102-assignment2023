import Link from 'next/link';
import BallAnimation from './ball/ball.js';

export default function FirstPost() {
    return (
        <>
            <h1>LATEST UPDATE</h1>
            <h2>
                The uploading issue related to ONESTORE has been resolved at March 20th 5 : 55 P.M. and the 9th anniversary update has been completed.
                We apologize for the inconvenience this has been causing.
                Thank you for the support.  - TEAM42

                <br />
                <br />

                <Link href="/">Back to home</Link>
            </h2>
            <BallAnimation />
        </>
    );
}
