import award1 from '../../assets/images/new-project_1703419782861.jpg'
import award2 from '../../assets/images/male-business-executive-receiving-award.jpg'
import award3 from '../../assets/images/award2.jpg'
import award4 from '../../assets/images/award4.jpg'
import award5 from '../../assets/images/award5.jpg'



const Awards = () => {
    return (
        <div className='ml-16 mr-2 grid grid-cols-3 gap-8  '>

            <div className="card card-compact    lg:card-side bg-base-100 shadow-xl col-span-2 ">
                <figure><img className='h-full' src={award1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SwiftPay, Country’s Best & Most Loved Brand for 5th consecutive year</h2>
                    <p></p>
                    <div className="card-actions ">
                        <h3>Posted on 8 August 2023 | 15 mins read</h3>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={award2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">‘Fintech Pioneer Award’ from Prime Minister</h2>
                    <p></p>
                    <div className="card-actions">
                    <h3>Posted on 27 December 2023 | 15 mins read</h3>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={award3} alt="ceo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SwiftPay CEO on the Transformative Impact of Financial Inclusion</h2>
                    <p></p>
                    <div className="card-actions">
                    <h3>Posted on 12 May 2023 | 13 mins read</h3>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={award4} alt="ceo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  World Chapmion bowling team partners with SwiftPay </h2>
                    <p></p>
                    <div className="card-actions">
                    <h3>Posted on 14 May 2023 | 7 mins read</h3>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={award5} alt="ceo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  SwiftPay wins ‘Best CSR in Education’ award </h2>
                    <p></p>
                    <div className="card-actions">
                    <h3>Posted on 05 December 2022 | 2 mins read</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;