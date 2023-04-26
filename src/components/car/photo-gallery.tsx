import React, { useState } from "react";
import "./styles/photo-gallery-styles.scss";
import leftArrow from "../../img/left-arrow-gallery.svg";
import rightArrow from "../../img/right-arrow-gallery.svg";
import { PhotoGalleryTypes } from "./types/photo-gallery-interface";

function PhotoGallery({ photos, altTag, slug }: PhotoGalleryTypes) {
  const [photo, setPhoto] = useState(photos[0]);
  const currentPhotoIndex = photos.indexOf(photo);

  let allPhotos = photos.map((reelPhoto: string, index: number) => {
    const isActive = reelPhoto === photo;

    return (
      <div className='photo-gallery-reel-photo' key={`photo-${index}`}>
        <img
          src={reelPhoto}
          alt={altTag}
          width='100%'
          className={isActive ? "active-photo" : ""}
          onClick={() => setPhoto(photos[index])}
        />
      </div>
    );
  });

  function handleNext() {
    setPhoto(() => photos[currentPhotoIndex + 1]);
  }

  function handlePrevious() {
    setPhoto(() => photos[currentPhotoIndex - 1]);
  }

  return (
    <div className='photo-gallery-wrapper'>
      <div className='photo-gallery-current-photo'>
        <img src={photo} alt={altTag} width='1080' className={slug} />
        {currentPhotoIndex < photos.length - 1 && (
          <div onClick={handleNext} className='gallery-next-button'>
            <img src={rightArrow} alt='left arrow' />
          </div>
        )}
        {currentPhotoIndex > 0 && (
          <div onClick={handlePrevious} className='gallery-previous-button'>
            <img src={leftArrow} alt='right arrow' />
          </div>
        )}
      </div>
      <div className='photo-gallery-reel'>{allPhotos}</div>
    </div>
  );
}

export default PhotoGallery;
