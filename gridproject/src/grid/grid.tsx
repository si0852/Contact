const prscCodeGrid = {
    name: 'prscCodeGrid',
    fields: [
      {
        fieldName: 'apdy',
      },
      {
        fieldName: 'name',
      },
      {
        fieldName: 'dept',
      },
      {
        fieldName: 'phone',
      },
      {
        fieldName: 'mail',
      },
      {
        fieldName: 'test',
      },
    ],
    //그 아래 실제 컬럼들에 대한 명세
    columns: [
      {
        fieldName: 'apdy',
        width: '150',
        header: '적용일',
        editable: false,
      },
      {
        name: 'name',
        fieldName: 'name',
        header: '이름',
        width: 100,
        editable: true,
      },
      {
        name: 'dept',
        fieldName: 'dept',
        header: '부서',
        width: '150',
        editable: false,
      },
      {
        name: 'phone',
        fieldName: 'phone',
        header: '휴대폰번호',
        width: '150',
        editable: false,
      },
      {
        name: 'mail',
        fieldName: 'mail',
        header: '메일',
        width: '150',
        editable: false,
      },
    ],
  };
  
  export default prscCodeGrid;
  