

export const getPatientAPI = () => {
    return {
        id: uuidv4(),
  name: 'Bệnh nhân A',
  address: 'Địa chỉ A',
  birthday: generateRandomDate(new Date(1950, 0, 1), new Date(2005, 11, 31)),
  job: 'Nghề nghiệp A',
  phoneNumber: '0123456789',
  nation: 'Quốc tịch A',
  gender: 'Nam',
    }
}