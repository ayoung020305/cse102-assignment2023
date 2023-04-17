import { useEffect, useRef } from 'react';
import p5 from 'p5';

export default function BallAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            let x = 100;
            let y = 100;
            let xSpeed = 1.5;
            let ySpeed = 2.1;
            let gravity = 0.2;

            let x_2 = 500;
            let y_2 = 50;
            let xSpeed_2 = 2.0;
            let ySpeed_2 = 5.0;
            let gravity_2 = 0.5;

            p.setup = () => {
                p.createCanvas(640, 360).parent(canvasRef.current);
            };

            p.draw = () => {
                p.background(0);

                // Move the ball along x-axis
                x += xSpeed;
                x_2 += xSpeed_2;

                // Apply gravity to y-speed
                ySpeed += gravity;
                ySpeed_2 += gravity_2;

                // Move the ball along y-axis
                y += ySpeed;
                y_2 += ySpeed_2;

                // Bounce the ball when it hits the ground
                if (y > p.height - 24) {
                    y = p.height - 24;
                    ySpeed *= -1;
                }

                if (y_2 > p.height - 15) {
                    y_2 = p.height - 15;
                    ySpeed_2 *= -1;
                }

                // Bounce the ball when it hits the edges of the canvas
                if (x < 24 || x > p.width - 24) {
                    xSpeed *= -1;
                }
                if (x_2 < 15 || x_2 > p.width - 15) {
                    xSpeed_2 *= -1;
                }

                // Draw the ball
                p.stroke(255);
                p.strokeWeight(2);
                p.fill(127, 0, 0);
                p.ellipse(x, y, 48, 48);
                p.fill(100, 50, 100);
                p.rect(x_2, y_2, 30, 30);
            };
        };

        new p5(sketch);
    }, []);

    return <div ref={canvasRef}></div>;
}
