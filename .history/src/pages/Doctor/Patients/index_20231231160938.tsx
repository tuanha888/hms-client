import React from "react";
import { AppDispatch, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "../../../components/common/interfaces";

const Patients = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([
      dispatch(getPostsOfDoctor()),
      dispatch(getCategories()),
    ]);
  });
  const postsDoctor = useSelector((state: RootState) => state.post.doctorPosts);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const fields: Field[] = [
    {
      fieldName: "name",
      fieldDisplay: "Họ tên",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "address",
      fieldDisplay: "Địa chỉ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "bỉthday",
      fieldDisplay: "Ngày sinh",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
    },
    {
      fieldName: "job",
      fieldDisplay: "Nghề nghiệp",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "phoneNumber",
      fieldDisplay: "Số điện thoại",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "nation",
      fieldDisplay: "Dân tộc",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
    },
    {
      fieldName: "gender",
      fieldDisplay: "Giới tính",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "text",
    },
  ];
  const renderPostsDoctor = () => {
    return postsDoctor.map((post) => {
      return <PostDoctor fields={fields} entity={post} openDetailEdit={true} />;
    });
  };
  return (
    <ul className="posts-doctor layout">{isFetched && renderPostsDoctor()}</ul>
  );
};

export default PostsDoctor;

export default Patients;
