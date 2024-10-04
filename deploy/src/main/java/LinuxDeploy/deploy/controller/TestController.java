package LinuxDeploy.deploy.controller;

import LinuxDeploy.deploy.MemberRepository;
import LinuxDeploy.deploy.domain.Member;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequiredArgsConstructor
public class TestController {
    private final MemberRepository memberRepository;

    @GetMapping()
    public Member save(){
        return memberRepository.save(Member.builder().name("sws").password("1234").build());
    }

    @GetMapping("/hello")
    public Member getRandomNumber() {
        memberRepository.save(Member.builder().name("sws").password("1234").build());
        Member member = memberRepository.findById(1L).orElseThrow();
        System.out.println("member = " + member);
        return member;
    }
}
