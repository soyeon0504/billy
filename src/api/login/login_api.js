import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/user`;

// 로그인
export const loginPost = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      uid: loginParam.uid,
      upw: loginParam.upw,
    };

    const res = await axios.post(`${path}`, data, header);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successFn(res.data);

      return res.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. 서버가 불안정합니다. 다시 시도해주세요.");
  }
};

// 아이디 찾기
export const idPost = async(obj, setUserList) => {
  try {
    // const url = `${SERVER_URL}/api/user/id`
    const res = await axios.post(`${SERVER_URL}/api/user/id`, obj)
    
    const resStatus = res.status.toString();
    if(resStatus.charAt(0) === "2" ){
      setUserList({ ...res.data })
    } else{
      alert("데이터 전송에 실패했습니다.")
    }
    // fnc([...res.data])
  } catch (error) {
    console.log("error")
  }
}
