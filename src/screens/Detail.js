
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { products } from '../fakeData'
import Header from "../conponents/Header";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail } from "../services/api";
import { comment } from "postcss";
import { getComment,createComment } from "../services/api";

const sizeList = [40, 41, 42, 43]

function App() {
  const [detail,setDetail] = useState([]);
  const [comments,setComment] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const params = useParams();
  console.log('param',params);

  useEffect(() => {
    const getAllDetail = async() => {
      const result = await getDetail(params.id);
      console.log('result',result.data);
      setDetail(result.data)
    }

     getAllDetail();

  },[]);

  useEffect(() => {
    const getAllComment = async() => {
      const result = await getComment(params.id);
      console.log('result',result.data);
      setComment(result.data)
    }

     getAllComment();

  },[]);

  const onChangeName = (ev) => {
    console.log(ev.target.value);
    setName(ev.target.value);
  };
  const onChangeReview = (ev) => {
    console.log(ev.target.value);
    setReview(ev.target.value);
  };

  const addComment = async () => {
    const result = await createComment({ name: name, content: review });
    console.log(result.data);
  };


  console.log('abc',detail)
  return (
    <div>
      {/* header */}
      <Header />

      {/* product detail */}
      <div>
        <div className='flex flex-row mt-14 mb-8'>
          <div className='w-1/2'>
            <img src={detail.images} alt={'shoes'} className='object-cover w-full' style={{ height: 500 }} />
          </div>
          <div className='w-1/2 px-8'>
            <div className='bg-gray-800 inline-block p-2 px-6 text-white font-bold'>{detail.id}</div>
            <div className='text-4xl font-bold my-1'>{detail.material}</div>
            <div>{detail.name}</div>
            <div className='my-2'>{detail.star}⭐</div>
            <div>{detail.price}$</div>
            <div className='my-2 border-dashed border-y-2 border-gray-500 py-4'>
            {detail.description}
            </div>
            <div className='flex flex-row items-center'>
              <div className='mr-2'>Available sizes:</div>
              {sizeList.map(e => (
                <div className='mr-2 mt-2 flex px-4 h-11 justify-center items-center uppercase font-medium border border-gray-400 cursor-pointer'>
                  {e}
                </div>
              ))}
            </div>
            <div className='flex flex-row mt-4'>
              <div className='w-1/2 bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                Add to cart
              </div>
              <div className='ml-2 flex px-4 bg-gray-200 h-11 justify-center items-center uppercase font-medium text-white cursor-pointer'>
                <FaHeart
                  className='text-gray-800'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Description
        </div>
        <div className='px-40 my-4'>
          RACER TR21 SHOES
          RUNNING-INSPIRED SHOES FOR DAILY WEAR.
          Bring the comfort and athletic style of running footwear to your everyday look in these adidas shoes. Step through your day confidently with a snug fit and a lightweight midsole that cushions your feet with every step.

          This product is made with Primegreen, a series of high-performance recycled materials. 50% of the upper is recycled content. No virgin polyester.
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Reviews
        </div>

          <div className='px-40 my-4'>
            <div className='flex flex-row justify-between mb-4'>
              <div className='font-bold text-xl'>841 reviews</div>
              <div className='underline'>Write a review</div>
            </div>

            <div className="wrap-write-review">
            <div>Name</div>
            <input className="input-comment"
              value={name}
              onChange={onChangeName}
            />
            <div>content</div>
            <input className="input-comment"
              value={review}
              onChange={onChangeReview}
            />
            <div
              onClick={addComment}
              className='mt-2 w-1/2 bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
              Add comment
            </div>
          </div>



        {comments.map((content,i) => (
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>{content.name}</div>
            <div className='text-xs'>{content.createdAt}</div>
            <div>{content.conent}</div>
          </div>
        ))}

          {/* <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div> */}

        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Products viewed
        </div>
        { <div className='flex flex-row justify-around px-40 my-4'>
          {[].slice(2, 6).map(e => (
            <div className='mr-6'>
              <img src={e.img} alt={'shoes'} className='object-cover w-72 h-72' />
            </div>
          ))}
        </div> }

      </div>


    </div>
  );
}

export default App;
