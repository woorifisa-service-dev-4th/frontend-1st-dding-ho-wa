import React, { useEffect, useState } from 'react'
import { StyledContainerReceipt, StyledPagenationButton, StyledRankedList, StyledReceiptTopContent, StyledResultButtonContainer, StyledScoreContainer } from './Result.style'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import "./Result.css";  
import Modal from '../../components/Modal/Modal';

export const Result = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [ranks, setRanks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(savedScore);
    }
  }, []);

  useEffect(() => {
    const fetchRankingData = async (page) => {
      try {
        const response = await fetch(`/rank?page=${page}`);
        const data = await response.json();
        if (data.success) {
          setRanks(data.data);
          setTotalPages(data.totalPages);
        } else {
          alert('데이터를 불러오는데 실패했습니다.');
        }
      } catch (error) {
        console.error('데이터 불러오기 오류:', error);
      }
    };

    fetchRankingData(currentPage);
  }, [currentPage]);

  

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      
      setCurrentPage(currentPage + 1);
    }
  };

  const renderRanking = () => {
    return ranks.map((player, index) => {
      const overallIndex = (currentPage - 1) * limit + index + 1;
      return (
        <div className="rank" key={overallIndex} data-rank={overallIndex} style={{ display: 'flex', marginBottom: '10px'}}>
          <div className="rank_num">{`${overallIndex}등`}</div>
          <div className="rank_name">{player.nickname}</div>
          <div className="rank_score">{`${player.score}점`}</div>
        </div>
      );
    });
  };
  
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  return (
    <>
      <StyledContainerReceipt>
        <StyledReceiptTopContent>
          <div className="text_receipt">띵호와 결과 계산서</div>
          <div className="text_thank_msg">감사합니다</div>
          <StyledResultButtonContainer>
            <Button className='yellow' onClick={() => navigate('/')}>홈으로</Button>
            <Button className='yellow' onClick={openModal}>랭킹보기</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal} >
              <div className="text_receipt">띵호와 랭킹표</div>
              <StyledRankedList>
                {renderRanking()}
              </StyledRankedList>
              <StyledPagenationButton>
                <Button className='prev' onClick={handlePrev}>&lt;</Button>
                <Button className='black' onClick={closeModal}>돌아가기</Button>
                <Button className='next' onClick={handleNext}>&gt;</Button>
              </StyledPagenationButton>
            </Modal>
          </StyledResultButtonContainer>
          <hr />
        </StyledReceiptTopContent>
        <StyledScoreContainer>
          <div className="text_total">SCORE</div>
          <div className="text_score">{score}</div>
        </StyledScoreContainer>
      </StyledContainerReceipt>
    </>
  )
}

export default Result