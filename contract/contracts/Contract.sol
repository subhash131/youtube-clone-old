// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract YouTube {
    uint256 videoCount = 0;
    struct Video {
        address myAddress;
        string videoUrl;
        uint256 likes;
        uint256 timeStamp;
    }

    mapping(uint256 => Video) videos;

    function uploadVideo(string memory _videoUrl) external {
        videos[videoCount].videoUrl = _videoUrl;
        videos[videoCount].myAddress = msg.sender;
        videos[videoCount].timeStamp = block.timestamp;
        videoCount++;
    }

    function like(uint256 index) external {
        videos[index].likes += 1;
    }

    function getAllVideos() public view returns (Video[] memory) {
        Video[] memory allVideos = new Video[](videoCount);
        for (uint256 i = 0; i < videoCount; i++) {
            allVideos[i] = videos[i];
        }
        return allVideos;
    }

    function getVideoByIndex(uint256 index) public view returns (Video memory) {
        return videos[index];
    }
}
