import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const ChildStoryTemplate = (props) => {
    const { name, name2, story, photoDescription1, photoDescription2, photoDescription3, photoDescription4 } = props;

    return(
        <div className='justify'>
            <h1>{name.toUpperCase()}</h1>
            <div className='inlineBlock'>
                <img className='leftSidePhoto' src={require(`../../../assets/photos/${name.toLowerCase()}0.jpg`)} alt={name} />
                <p className='withoutMargin'>{story}</p> 
            </div>
            {photoDescription1 &&
                <div className='childrenPhotos'>
                    <div className='margin10px'>
                        <img className='responsiveImage' src={require(`../../../assets/photos/${name.toLowerCase()}1.jpg`)} alt={photoDescription1} />
                        <div>{photoDescription1}</div>
                    </div>
                    {photoDescription2 &&
                        <div className='margin10px'>
                            <img className='responsiveImage' src={require(`../../../assets/photos/${name.toLowerCase()}2.jpg`)} alt={photoDescription2} />
                            <div>{photoDescription2}</div>
                        </div>
                    }
                    {(photoDescription3 && !photoDescription4) &&
                        <div className='margin10px'>
                            <img className='responsiveImage' src={require(`../../../assets/photos/${name.toLowerCase()}3.jpg`)} alt={photoDescription3} />
                            <div>{photoDescription3}</div>
                        </div>
                    }
                </div>
            }
            {photoDescription4 &&
                <div className='childrenPhotos'>
                    <div className='margin10px'>
                        <img className='responsiveImage' src={require(`../../../assets/photos/${name.toLowerCase()}3.jpg`)} alt={photoDescription3} />
                        <div>{photoDescription3}</div>
                    </div>
                    <div className='margin10px'>
                        <img className='responsiveImage' src={require(`../../../assets/photos/${name.toLowerCase()}4.jpg`)} alt={photoDescription4} />
                        <div>{photoDescription4}</div>
                    </div>
                </div>
            }
            <SupportThisChild name1={name} name2={name2} />
        </div>
    );
}

export default ChildStoryTemplate;
