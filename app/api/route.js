export async function GET() {
    return new Response(
        JSON.stringify({
            message: "สวัสดีครับ",
            name: "นายปรวภัทร มุธะรพัฒน์",
            age: 21,
            birthday: "29 กันยายน 2546",
            trainees: "Developer Trainee",
            university: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
            faculty: "คณะวิทยาศาสตร์",
            major: "วิทยาการคอมพิวเตอร์",
            studentId: "6530200266",
            contact: {
                email: "porawapat.m@ku.th",
                phone: "092-262-9489",
            }
        }),
    );
}