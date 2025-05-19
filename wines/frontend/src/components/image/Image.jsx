import React from 'react'
import "./Image.css"
const Image = () => {
    return (
        <section id='image-area'>
            <div className='container'>
                <div className="images">
                    <div className="image-cart">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/wines/images/person_3.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                            <span>— Levi Morris</span>
                        </div>
                    </div>
                    <div className="image-cart">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                            <span>— Allie Smith</span>
                        </div>
                    </div>
                    <div className="image-cart">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                            <span>— Collin Miller</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Image
