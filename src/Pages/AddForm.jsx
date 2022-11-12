import React, { useState } from 'react'


const Increment=()=>{
    return <AddForm/>
}
const AddForm = () => {
    const [list,setList]=useState([]);
    const Add=()=>{
         setList([...list,<Increment/>])
    };
   
    console.log(list)
  return (
     <>
      <div className="form my-5 col-md-4 m-auto px-5 py-5">

      <form className='my-4'>
                <div className='my-5'>
                    <h3 className='text-primary'>بيانات الابناء  المتفوقين والفائيقات</h3>
                    <input type='text' className="py-3 form-control mt-4" placeHolder="الاسم الثلاثي" />

                </div>


                <div>
                    <h3 className='text-primary mb-3'>المرحلة الدراسية 2021 - 2021  ( السابقة )</h3>
                    <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                        <input type="radio" className='mb-0' name="radio" />
                        <label class="container fs-5 fw-bolder text-primary">ابتدائي </label>

                    </div>


                    <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                        <input type="radio" className='mb-0' name="radio" />
                        <label class="container fs-5 fw-bolder text-primary">متوسظ</label>

                    </div>


                    <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                        <input type="radio" className='mb-0' name="radio" />
                        <label class="container fs-5 fw-bolder text-primary">ثانوي</label>

                    </div>


                    <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                        <input type="radio" className='mb-0' name="radio" />
                        <label class="container fs-5 fw-bolder text-primary">دبلوم</label>

                    </div>

                    <div className='d-flex align-items-center' style={{ width: "fit-content" }}>
                        <input type="radio" className='mb-0' name="radio" />
                        <label class="container fs-5 fw-bolder text-primary">الجامعه والدرسات العليا</label>

                    </div>
                </div>


                <div className='my-5'>
                    <h3 className='text-primary'>الصف الدراسي 2021 - 2021  ( السابقة )</h3>
                    <select class="form-select mt-4 py-3" aria-label="Default select example">
                        <option selected>يرجي  اختيار  الفصل الدراسي</option>
                        <option value="1">الاول</option>
                        <option value="2">التاني </option>
                    </select>
                </div>


                <div className='my-5'>
                <h3 className='text-primary'>صورة الشهادة الدراسية للعام الدراسي 2021-2022</h3>
                <div >
                <div className='d-flex  align-items-center'>
                                <div className="parent-images ">
                                    <div className="child-image ">
                                        <img src='./images/image (1) 2.png' />
                                    </div>
                                    <input type="file" />

                                </div>

                            </div>
                            <p className='text-muted mt-2 '> صوره الشهاده</p>
                </div>
                </div>



            </form>
           

        </div>
        {list}



     </>
  )
}

export default AddForm
