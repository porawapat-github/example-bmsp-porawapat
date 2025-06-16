"use client";

import React, { useState, useEffect } from "react";
import '@ant-design/v5-patch-for-react-19';
import { Button, Card, Divider, Image, Typography, Space } from "antd";
const { Title, Text, Paragraph } = Typography;

function Page() {
    const [name, setName] = useState("");
    const [data, setData] = useState(null);

    const changeName = () => {
        setName("บอส");
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("/api");
        const data = await response.json();
        setData(data);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 pb-10">
            <div className="overflow-auto scrollbar-hide">
            <Card
                className="w-full max-w-md shadow-xl mb-5"
                variant="outlined"
                style={{ borderRadius: 16, marginTop: 32 }}
                styles={{ body: { padding: 0 } }}
            >
                <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-xl p-6">
                    <Image
                        width={150} 
                        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmcwc2h2czR0Mmlyb2s1dDdvOGxvYm1yZTk1dmsyYzZ0ZmRibGx5aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ip1NduMj923iZnuHfb/giphy.webp"
                        alt="Boss Image"
                        className="border-4 rounded-3xl border-white shadow-lg"
                    />
                    <Title level={3} className="!text-white mt-4 mb-0">
                        {data ? data.name : "Loading..."}
                    </Title>
                    <Text className="!text-blue-100">{name}</Text>
                </div>
                <div className="p-5">
                    <Space direction="vertical" size="small" className="w-full">
                        <Paragraph>
                            <Text strong>ตำแหน่ง:</Text> {data?.trainees}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>สถานศึกษา:</Text> {data?.university}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>คณะ:</Text> {data?.faculty}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>สาขา:</Text> {data?.major}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>รหัสนักศึกษา:</Text> {data?.studentId}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>อายุ:</Text> {data?.age} ปี
                        </Paragraph>
                        <Paragraph>
                            <Text strong>วันเดือนปีเกิด:</Text> {data?.birthday}
                        </Paragraph>
                        <Divider orientation="center">
                            <Text strong>ช่องทางติดต่อ</Text>
                        </Divider>
                        <Paragraph>
                            <Text strong>อีเมล:</Text> {data?.contact.email}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>เบอร์โทรศัพท์:</Text> {data?.contact.phone}
                        </Paragraph>
                    </Space>
                </div>
                <div className="flex justify-center pb-6">
                    <Button type="primary" onClick={changeName}>
                        ชื่อเล่น
                    </Button>
                </div>
            </Card>
            </div>
        </div>
    );
}

export default Page;