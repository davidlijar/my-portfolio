import Link from 'next/link'
import Image from 'next/image'

const Profile = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-center">
        <Image
          alt="LI JAR"
          className="rounded-full"
          height={100}
          src="/lijar_profile.jpg"
          style={{
            aspectRatio: '400/400',
            objectFit: 'cover',
          }}
          width={100}
        />
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Name</label>
        <span className="font-bold">LI JAR</span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Age</label>
        <span className="font-bold">24</span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Nationality</label>
        <span className="font-bold">Myanmar</span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Occupation</label>
        <span className="font-bold">Student</span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Spoken Language</label>
        <span className="font-bold">English|Korean|Burmese|Akha</span>
      </div>
      <div className="flex justify-between w-[100%] gap-5">
        <label>University/College</label>
        <span className="font-bold">
          Mandalay University of Technology (2017-2020)
          <br /> Vision College of Jeonju (2023~)
        </span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Phone</label>
        <span className="font-bold">010-2178-4121</span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Email</label>
        <span className="font-bold">davidbeljar@gmail.com</span>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Website</label>
        <Link href={'https://lijar.vercel.app/'}>
          <span className="font-bold underline underline-offset-1">
            lijar.vercel.app
          </span>
        </Link>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>Youtube</label>
        <Link href={'https://www.youtube.com/@navico7'}>
          <span className="font-bold underline underline-offset-1">
            @navico7
          </span>
        </Link>
      </div>
      <div className="flex justify-between w-[100%]">
        <label>GitHub</label>
        <Link href={'https://github.com/davidlijar'}>
          <span className="font-bold underline underline-offset-1">
            github.com/davidlijar
          </span>
        </Link>
      </div>
    </section>
  )
}

export default Profile
