import React from "react";

function TouristInfoCards() {
  return (
    <div>
      <div className="card TouristCard">
        <img
          src="https://www.visitbritain.com/sites/default/files/styles/image_gallery_with_text/public/consumer/paragraphs-bundles/image-gallery-with-text/lightshow_at_festival_2018_glasgow_vb34168999.jpg?itok=xF8P2N9M"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="http://www.peoplemakeglasgow.com"
            className="btn #]btn-primary"
          >
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card TouristCard">
        <img
          src="https://media.jtdwjcwq6f4wp4ce.com/ei/cities/manchester-EI.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://www.visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card TouristCard">
        <img
          src="https://i.ytimg.com/vi/mBELEFMoktU/maxresdefault.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://www.visitlondon.com.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
