const Map = () => {
    return (
        <div className="bg-blue-300 p-4 rounded-lg shadow-lg">
            <iframe
                title="Store Location"
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1942144999484!2d-122.41941568468254!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806c65e4d89d%3A0x95a08c7a6d7e5173!2sSan+Francisco+Bay!5e0!3m2!1sen!2sus!4v1638861376321!5m2!1sen!2sus"
                // allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default Map;