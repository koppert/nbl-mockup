import React from 'react';
import { Dropdown, Menu, Input, Row, Col, Divider, Tag, Space } from 'antd';

const AppContent = () => {
    const hebrewWords = [
        { text: 'רֵאשִׁית', color: 'blue', translationOptions: [] },
        { text: 'בָּרָא', color: 'blue', translationOptions: [] },
        { text: 'אֵת', color: 'blue', translationOptions: [] },
        { text: 'אֱלֹהִים', color: '#f50', translationOptions: [] },
        { text: 'שָׁמַיִם', color: '#108ee9', translationOptions: [] },
        { text: 'אֵת', color: 'blue', translationOptions: [] },
        { text: 'אֶרֶץ', color: 'blue', translationOptions: [] }
    ];

    const translationWords = [
        { text: 'No', color: 'blue' },
        { text: 'princípio', color: 'blue' },
        { text: 'do', color: 'blue' },
        { text: 'criar', color: 'blue' },
        { text: 'de', color: 'blue' },
        { text: '‘Elohim', color: '#f50' },
        { text: 'os', color: '#108ee9' },
        { text: 'céus', color: '#108ee9' },
        { text: 'e', color: 'blue' },
        { text: 'a', color: 'blue' },
        { text: 'terra', color: 'blue' }
    ];

    const option3Words = [
        { text: 'אָמַר', color: 'blue', translationOptions: [] },
        { text: 'אֱלֹהִים', color: 'blue', translationOptions: ["‘Elohim", "Divindade"] },
        { text: 'הָיָה', color: 'blue', translationOptions: [] },
        { text: 'אוֹר', color: 'blue', translationOptions: [] },
        { text: 'אוֹר', color: 'blue', translationOptions: [] }
    ];

    const translationWordsOption3 = [
        { text: 'E', color: 'blue' },
        { text: 'diz', color: 'blue' }
    ];

    const createMenuItems = (translations) => {
        const translationItems = translations.map((translation, index) => ({
            key: index.toString(),
            label: translation,
        }));

        if (translationItems.length > 0) {
            translationItems.push({ type: 'divider' });
        }

        translationItems.push({
            key: 'search',
            label: 'Buscar ocorrências'
        });

        return translationItems;
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Gênesis 1</h1>

            <h2 style={{ textAlign: 'center' }}>Opção 1 - Associação</h2>
            <Row
                gutter={[24, 16]}
                justify="center"
                style={{ textAlign: 'center', marginTop: '20px' }}
            >
                {hebrewWords.map((word, index) => (
                    <Col key={index}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                            {word.text}
                        </div>
                        <Input size="large" />
                    </Col>
                ))}
            </Row>

            <Divider />

            <h2 style={{ textAlign: 'center' }}>Opção 2 - Associação</h2>
            <Row
                justify="center"
                style={{ textAlign: 'center', marginTop: '20px' }}
                gutter={[8, 16]}
            >
                <Col>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                        <Space size={20}>
                            {hebrewWords.map((word, index) => (
                                <Tag
                                    key={index}
                                    color={word.color}
                                    style={{
                                        fontSize: '24px',
                                        padding: '6px 12px',
                                        marginBottom: '8px',
                                        display: 'inline-block'
                                    }}
                                >
                                    {word.text}
                                </Tag>
                            ))}
                        </Space>
                    </div>
                    <div style={{ fontSize: '24px', marginTop: '16px', marginBottom: '16px' }}>
                        <Space size={20}>
                            {translationWords.map((word, index) => (
                                <Tag
                                    key={index}
                                    color={word.color}
                                    style={{
                                        fontSize: '24px',
                                        padding: '6px 12px',
                                        marginBottom: '8px',
                                        display: 'inline-block'
                                    }}
                                >
                                    {word.text}
                                </Tag>
                            ))}
                        </Space>
                    </div>
                    <Input
                        size="large"
                        style={{ width: '100%', marginBottom: '16px' }}
                        value={translationWords.map(word => word.text).join(" ")}
                    />
                </Col>
            </Row>

            <Divider />

            <h2 style={{ textAlign: 'center' }}>Opção 3 - Reutilização</h2>
            <Row
                justify="center"
                style={{ textAlign: 'center', marginTop: '20px' }}
                gutter={[8, 16]}
            >
                <Col>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                        <Space size={20}>
                            {option3Words.map((word, index) => (
                                <Dropdown
                                    key={index}
                                    trigger={['contextMenu']}
                                    menu={{ items: createMenuItems(word.translationOptions) }}
                                >
                                    <Tag
                                        color={word.color}
                                        style={{
                                            fontSize: '24px',
                                            padding: '6px 12px',
                                            marginBottom: '8px',
                                            display: 'inline-block',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {word.text}
                                    </Tag>
                                </Dropdown>
                            ))}
                        </Space>
                    </div>
                    <Input
                        size="large"
                        style={{ width: '100%', marginBottom: '16px' }}
                        value={translationWordsOption3.map(word => word.text).join(" ")}
                    />
                </Col>
            </Row>

        </div>
    );
};

export default AppContent;
