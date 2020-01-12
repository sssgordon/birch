import React from "react";
import { Link } from "react-router-dom";

import "./Details.css";

export default function Detail(props) {
    return (
        <div className="details">
            <div className="details__container">
                <div className="details__img-container">
                    <img src={props.imgUrl} />
                </div>
                <div className="details__info">
                    <h1>{props.name}</h1>
                    <h5>{props.description}</h5>

                    <h3>{props.price}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec tristique ante eget sem maximus lobortis. Morbi et
                        accumsan ipsum. Integer enim dui, elementum sit amet
                        euismod sed, auctor quis eros. Integer a hendrerit ante.
                        Duis et scelerisque libero, sit amet tristique sem.
                        Integer vitae ipsum sit amet sem vulputate pharetra.
                        Suspendisse sem eros, sollicitudin sed ornare ac,
                        sagittis in mauris. Sed laoreet nec turpis a consequat.
                        Curabitur egestas est vel arcu ultricies, ac volutpat
                        sem egestas. Nam ultricies nisl vel justo imperdiet, eu
                        fringilla nulla eleifend. Nulla varius scelerisque nisi,
                        pulvinar laoreet ligula volutpat nec. Sed sed
                        sollicitudin sem, ut sagittis diam.
                    </p>
                    <Link to="/" className="return">
                        Return
                    </Link>
                </div>
            </div>
        </div>
    );
}
