import { Field } from "../common/interfaces";

export const doctorFields : Field[] = [
    {
      fieldName: "name",
      fieldDisplay: "Họ tên",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "departmentName",
      fieldDisplay: "Chuyên khoa",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "departmentId",
      fieldDisplay: "Chuyên khoa",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "address",
      fieldDisplay: "Địa chỉ",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "birthday",
      fieldDisplay: "Ngày sinh",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null,
    },
    {
      fieldName: "phoneNumber",
      fieldDisplay: "Số điện thoại",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null,
    },
    {
      fieldName: "gender",
      fieldDisplay: "Giới tính",
      overviewDisplay: false,
      detailDisplay: false,
      modifyDisplay: false,
      choosen: null,
      type: "select",
      viewDetail: null,
    },
    {
      fieldName: "image",
      fieldDisplay: "",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "image",
      viewDetail: null,
    },
    {
      fieldName: "rating",
      fieldDisplay: "Đánh giá",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: false,
      choosen: null,
      type: "select",
      viewDetail: null,
    },
  ];

export const patientFields : Field[]= [
    {
      fieldName: "name",
      fieldDisplay: "Họ tên",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null
    },
    {
      fieldName: "address",
      fieldDisplay: "Địa chỉ",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null
    },
    {
      fieldName: "birthday",
      fieldDisplay: "Ngày sinh",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "dateday",
      viewDetail: null
    },
    {
      fieldName: "job",
      fieldDisplay: "Nghề nghiệp",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null
    },
    {
      fieldName: "phoneNumber",
      fieldDisplay: "Số điện thoại",
      overviewDisplay: true,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null
    },
    {
      fieldName: "nation",
      fieldDisplay: "Dân tộc",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "text",
      viewDetail: null
    },
    {
      fieldName: "gender",
      fieldDisplay: "Giới tính",
      overviewDisplay: false,
      detailDisplay: true,
      modifyDisplay: true,
      choosen: null,
      type: "select",
      viewDetail: null
    },
  ];

export const addVoteFields : Field[] = [
    {
        fieldName: "rating",
        fieldDisplay: "Số sao",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "select",
        viewDetail: null
      },
      {
        fieldName: "content",
        fieldDisplay: "Nội dung",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "doctorId",
        fieldDisplay: "Số sao",
        overviewDisplay: false,
        detailDisplay: false,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null
      }

]

export const medicalRecordFields : Field[] = [
    {
        fieldName: "doctorId",
        fieldDisplay: "",
        overviewDisplay: false,
        detailDisplay: false,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null,
      },
      {
        fieldName: "doctorName",
        fieldDisplay: "Bác sĩ",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null
      },
      {
        fieldName: "patientId",
        fieldDisplay: "",
        overviewDisplay: false,
        detailDisplay: false,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null,
      },
      {
        fieldName: "patientName",
        fieldDisplay: "Bệnh nhân",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null
      },
      {
        fieldName: "departmentId",
        fieldDisplay: "Bệnh nhân",
        overviewDisplay: false,
        detailDisplay: false,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null
      },
      {
        fieldName: "departmentName",
        fieldDisplay: "Bệnh nhân",
        overviewDisplay: false,
        detailDisplay: true,
        modifyDisplay: false,
        choosen: null,
        type: "text",
        viewDetail: null
      },
      {
        fieldName: "BHYTCode",
        fieldDisplay: "Mã BHYT",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "text",
        viewDetail: null
      },
      {
        fieldName: "inDay",
        fieldDisplay: "Ngày vào viện",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "datetime",
        viewDetail: null
      },
      {
        fieldName: "outDay",
        fieldDisplay: "Ngày ra viện",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "datetime",
        viewDetail: null
      },
      {
        fieldName: "inDayDiagnose",
        fieldDisplay: "Chẩn đoán lúc vào viện",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "outDayDiagnose",
        fieldDisplay: "Chẩn đoán lúc ra viện",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "medicalHistory",
        fieldDisplay: "Tiền sử bệnh lý",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "diseaseProgress",
        fieldDisplay: "Quá trình diễn biến bệnh",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "testResults",
        fieldDisplay: "Kết quả xét nghiệm",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "hospitalDischargeStatus",
        fieldDisplay: "Trạng thái lúc xuất viện",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },
      {
        fieldName: "stayType",
        fieldDisplay: "Điều trị",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "select",
        viewDetail: null
      },
      {
        fieldName: "note",
        fieldDisplay: "Ghi chú",
        overviewDisplay: true,
        detailDisplay: true,
        modifyDisplay: true,
        choosen: null,
        type: "textarea",
        viewDetail: null
      },

]