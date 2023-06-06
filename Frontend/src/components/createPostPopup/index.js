import { useState } from "react";
import { useRef } from "react";
import EmojiPickerBackground from "./EmojiPickerBackground";
import AddToYourPost from "./AddToYourPost";
import ImagePreview from "./ImagePreview";
import useClickOutside from "../../helpers/clickOutSide";
import {createPost} from "../../functions/post"
import PulseLoader from "react-spinners/PulseLoader";
import PostError from "./PostError";
import dataURItoBlob  from "../../helpers/dataURItoBlob";

export default function CreatePostPopup({ user, setVisible }) {
    const [text, setText] = useState("");
    // const textRef = useRef(null);
    const [showPrev, setShowPrev] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [images, setImages] = useState([]);
    const [background, setBackground] = useState(false);
    const popup = useRef(null);
    useClickOutside(popup, () => setVisible(false)
    );
    const postSubmit = async () => {
      if(background){
        setLoading(true);
        const response = await createPost(
          null,
          background,
          text,
          null,
          user.id,
          user.token
        );
        setLoading(false);
        
        if(response==="ok"){
          setBackground("");
          setText("");
          setVisible(false);
        }
        else{
          setError(response);
        }
        
      }else if (images && images.length) {
        setLoading(true);
      const postImages = images.map((img) => {
        return dataURItoBlob(img);
      });
      }else if(text){
        setLoading(true);
      const response = await createPost(
        null,
        null,
        text,
        null,
        user.id,
        user.token
      );
      setLoading(false);
      if (response === "ok") {
        setBackground("");
        setText("");
        setVisible(false);
      } else {
        setError(response);
      }

      }else{
        console.log("empty post");
      }

    }
    
return (
    
    <div className="bg-blur fixed top-0 left-0 z-10 h-[100%] w-[100%]">
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary shadow-[0_12px_20px_0] shadow-shadow-1 min-h-[220px] w-[500px] rounded-[5px] postBox"
        ref={popup}>
          {error && <PostError error={error} setError={setError} />}
        <div className="relative flex items-center justify-center text-[20px] font-bold p-[14px_15px_17px_15px] border-b-[1px_solid] box_header">
          <div
            className="small_circle" onClick={() => setVisible(false)}
          >
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="flex gap-[12px] p-[17px_17px_5px_17px] box_profile">
          <img
            src={user.picture}
            alt=""
            className="w-[40px] h-[40px] rounded-[50%] object-cover box_profile_img"
          />
          <div className="translate-y-[-7px] box_col">
            <div className="text-[14px] font-semibold mb-[4px] box_profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="flex items-center w-[81px] gap-[4px] text-[12px] p-[3px_8px_4px_8px] rounded-[7px] bg-third cursor-pointer box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span className="mb-[1px]">Public</span>
              <i className="arrowDown_icon"></i>
              </div>
          </div>
        </div>
        <div>
        {!showPrev ? (
          <>
            <EmojiPickerBackground
              text={text}
              setText={setText}
              user={user}
              showPrev={showPrev}
              setBackground={setBackground}
            />
          </>
        ) : (
          <ImagePreview
          text={text}
          setText={setText}
          user={user}
          showPrev={showPrev}
          images={images}
          setImages={setImages}
          setShowPrev={setShowPrev}
          />
        )}
            <AddToYourPost setShowPrev={setShowPrev}/>
            <button className="post_submit" onClick={()=>{postSubmit()}}
            disabled={loading}
          >
              {loading ? <PulseLoader color="#fff" size={5} /> : "Post"}
              </button>

        </div>
        </div>
        </div>
)}  