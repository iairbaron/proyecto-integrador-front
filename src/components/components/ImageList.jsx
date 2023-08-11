import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SlideImage from '../commmons/sildeImage';
import BasicModal from '../commmons/Modal';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList({ itemData }) {
    return (
        <>
            <ImageList sx={{ width: 700 }} variant="quilted" cols={4} rowHeight={200} >
                    {itemData.slice(0, 5).map((item, index) => (
                        <ImageListItem key={item.img} cols={index === 0 ? 2 : 1} rows={index === 0 ? 2 : 1} >
                            <img
                                {...srcset(item.img, 121, index === 0 ? 2 : 1, index === 0 ? 2 : 1)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

              
        </>
    );
}
