export default function ProfileCard(){
  const name:string = '山田太郎';
  const job:string = 'Next.jsエンジニア見習い';
  const bio:string = 'Next.jsとTypescriptを学びながらエンジニアを目指しています';

  return(
    <section className="bg-white p-6 shadow-lg rounded-b-lg">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-gray-600">{job}</p>
      <p className="mt-4">{bio}</p>
    </section>
  );
}