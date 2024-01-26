

const Map = () => {
    return (
      <div className="flex justify-center lg:pb-5 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467420.3030962046!2d90.12035070011363!3d23.75732241499096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7de0e452d%3A0xeec73914cc53b887!2sCity%20College%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1705582640087!5m2!1sen!2sbd"
          width="1100"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    );
};

export default Map;